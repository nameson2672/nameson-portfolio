---
title: "Consistent Hashing: How Distributed Systems Stay Balanced"
date: "2026-03-10"
slug: "consistent-hashing"
excerpt: "Most hashing schemes break when you add or remove a node. Consistent hashing is the elegant fix that powers systems like DynamoDB and Cassandra."
tags: ["distributed-systems", "databases"]
---

## The Problem with Naive Hashing

Imagine you have a cache with five nodes. A simple approach: `node = hash(key) % 5`. This works until you need to add a sixth node. Suddenly `% 5` becomes `% 6`, and nearly every key maps to a different node. Your cache hit rate craters to near zero. You've just triggered a thundering herd.

This is the fundamental problem with modular hashing in distributed systems: it doesn't degrade gracefully when the cluster size changes.

## The Ring Abstraction

Consistent hashing solves this by imagining your hash space as a ring — a circle from 0 to 2³² − 1 that wraps around. Each node is placed on this ring by hashing its identifier. When you want to find which node owns a key, you hash the key, find its position on the ring, and walk clockwise until you hit a node.

When you add a new node, it only takes responsibility for the keys between itself and its predecessor on the ring. When you remove a node, its keys transfer to its successor. In both cases, only a fraction of keys (roughly `1/N` where `N` is the number of nodes) need to move. The rest stay exactly where they are.

## Virtual Nodes

The naive ring approach has a flaw: with only a few nodes, the distribution can be wildly uneven. One node might own 40% of the ring while another owns 5%. Adding a node might relieve pressure on only one neighbor.

The fix is virtual nodes. Each physical node is represented by multiple points on the ring — DynamoDB uses hundreds per node. This averages out the distribution significantly and gives you a natural mechanism for heterogeneous clusters: give a more powerful node more virtual positions.

## Where It's Used

Consistent hashing appears in more systems than most engineers realize:

- **DynamoDB and Cassandra** use it for data partitioning
- **Memcached clients** use it to distribute cache keys
- **CDNs** use it for request routing
- **Load balancers** use it for session-affinity routing

## The Key Insight

What makes consistent hashing elegant isn't just that it minimizes key movement — it's that it decouples the routing logic from the cluster topology. Each client can independently compute which node owns a key without coordination. There's no routing table to synchronize, no master to consult.

That statelessness is what makes it fast, and what makes distributed systems built on it surprisingly simple under the hood.
