---
title: "Building a GitOps Pipeline for a Three-Tier App on Kubernetes"
date: "2026-01-14"
slug: "gitops-kubernetes"
excerpt: "Jenkins, ArgoCD, and Docker — how I wired them together and what I learned."
tags: ["devops", "kubernetes", "cloud"]
---

GitOps is the practice of using Git as the single source of truth for your infrastructure and application state. This is a walkthrough of a pipeline I built using Jenkins, ArgoCD, and Docker on Kubernetes.

## The Architecture

Three tiers: a React frontend, a Node.js API, and a PostgreSQL database. Each lives in its own Kubernetes namespace. The pipeline:

1. Developer pushes to a feature branch
2. Jenkins runs tests, builds Docker images, pushes to ECR
3. Jenkins updates the Kubernetes manifest in a separate `infra` repo (image tag bump)
4. ArgoCD detects the diff and syncs the cluster to match

The key insight is that the `infra` repo is the contract. ArgoCD doesn't care about Jenkins — it only cares that the repo reflects desired state.

## Why ArgoCD Over Flux

Both are solid. I chose ArgoCD for the UI — being able to visualize the diff between desired and current state is genuinely useful when something goes wrong at 11pm.

## The Rollback Story

The best feature of GitOps is rollback. When a bad deploy happened during testing, reverting was a `git revert` and a push. ArgoCD detected the change and rolled the cluster back within two minutes. No `kubectl` commands, no manual intervention.

## What I'd Do Differently

Separate the image build pipeline from the manifest update step earlier. We had them coupled in the same Jenkins job, which made the pipeline brittle. They're logically separate concerns and should be treated that way from day one.
