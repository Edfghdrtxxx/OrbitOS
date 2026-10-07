---
title: Shared ML Compute Node
type: project
status: active
area: "[[Physics Research]]"
created: 2026-10-04
due:
priority: medium
tags:
  - machine-learning
  - compute-infrastructure
  - remote-access
---
# Shared ML Compute Node

## Context

**Objective:** Provide a separate, remotely accessible compute machine for CPU (central processing unit) and GPU (graphics processing unit) workloads while the Mac remains the primary workstation for development, editing, orchestration, and agent work.

**Current boundary:** Bootstrap remote control first. Decide the final operating-system architecture after the machine, network path, storage, and shared-use requirements are verified.

**Scope:** This project concerns the new Windows PC described in the current request. [[Windows_PC_Sale/README|Windows PC sale prep]] describes a machine marked for sale; do not treat the two machines as the same host without verifying their identity.

**Success Metrics:**

- [ ] Mac can connect to the compute machine over SSH (Secure Shell).
- [ ] A maintainer can provision the machine without repeating manual setup for each user or project.
- [ ] Each group member can use a separate Linux account with key-based authentication.
- [ ] Approved ML workloads can run unattended and remain recoverable after an SSH disconnect.
- [ ] The final Windows-plus-WSL2 (Windows Subsystem for Linux 2) or bare-metal Linux choice is documented with its reason.

**Key Constraints:**

- Mac remains the primary daily workstation.
- The machine may become shared by classmates.
- Private SSH keys must never be shared.
- Administrative privileges stay with one or a small number of maintainers.
- Linux-native code, environments, datasets, and other workloads should live inside the WSL filesystem when WSL2 is used, not primarily under `/mnt/c/`.

---

## Actions

### Phase 1: Verify the host and remote-control path

- [ ] Record the PC hardware, NVIDIA GPU, storage layout, Windows edition, and current network location.
- [ ] Determine whether the PC must retain Windows-specific software or can become a dedicated compute node.
- [ ] Determine whether access will use a trusted local network, VPN (virtual private network), or another controlled route.
- [ ] Establish a maintainer account and a recovery path before inviting other users.
- [ ] Test Mac-to-host SSH connectivity before installing the ML stack.

### Phase 2: Bootstrap the operating-system candidate

#### Candidate A: Windows + WSL2

Windows remains the host operating system and provides the NVIDIA driver. WSL2 provides the Linux development environment:

```text
Mac
  │
  │ SSH / Remote Development
  ▼
Windows
  │
  ▼
WSL2 Ubuntu
  ├── Python
  ├── PyTorch
  ├── CUDA
  ├── Git
  ├── SSH
  └── ML projects
```

Keep code, environments, datasets with many small files, and other Linux-native workloads inside WSL, for example:

```text
/home/<user>/projects
/home/<user>/datasets
/home/<user>/models
```

Use `/mnt/c/` for Windows-facing files rather than as the primary location for Linux-native ML workloads.

#### Candidate B: Bare-metal Ubuntu LTS

Prefer bare-metal Linux if the PC becomes primarily a shared ML compute node and Windows-specific software is not required:

```text
             Mac / laptops
                  │
             SSH / VPN
                  │
                  ▼
        Ubuntu ML Compute Node
        ├── OpenSSH
        ├── NVIDIA driver
        ├── CUDA
        ├── Python / PyTorch
        ├── Docker
        ├── tmux
        └── shared storage
```

Evaluate this option for its simpler networking model, normal Linux account management, fewer host and guest layers, predictable server boot behavior, and easier long-term administration.

### Phase 3: Configure multi-user SSH

Do not give multiple people one Unix account. Create one account, home directory, and public SSH key per person:

```text
/home/
  reid/
  alice/
  bob/
  charlie/
```

Apply this access model:

- Each person receives a separate Linux account.
- Each person authenticates with their own SSH public key.
- Each person receives their own home directory.
- Group members receive no `sudo` privileges unless a maintainer explicitly grants them.
- Administrative privileges remain with one or a small number of maintainers.
- SSH ultimately prefers key authentication over shared passwords.
- Never share private SSH keys.

Suggested SSH posture after recovery access and key login are verified:

```yaml
PubkeyAuthentication yes
PasswordAuthentication no
PermitRootLogin no
```

### Phase 4: Separate personal and shared data

Keep personal code separate from group datasets and artifacts:

```text
/home/
  reid/
  alice/
  bob/

/data/
  datasets/
  checkpoints/
  shared/
```

Create a Unix group such as `ml` to own shared directories. Set directory permissions so group members can collaborate in `/data/` without opening one another's home directories.

### Phase 5: Add the ML and job-management stack

- [ ] Install Git and Python in the selected Linux environment.
- [ ] Install the NVIDIA driver and verify CUDA (NVIDIA's GPU computing platform) from the selected environment.
- [ ] Install and verify PyTorch.
- [ ] Install Docker if the chosen operating-system architecture requires it.
- [ ] Install `tmux` (a terminal multiplexer) for jobs that must continue after an SSH disconnect.
- [ ] Define where projects, datasets, checkpoints, logs, and shared artifacts live.
- [ ] Document restart, cleanup, and recovery procedures.

---

## Progress

- 2026-10-04: Created the project brief for a new shared ML compute node. Remote control is the first bootstrap target; the final operating-system architecture remains open.
- 2026-10-04: Identified Windows + WSL2 as the initial candidate and bare-metal Ubuntu LTS as the preferred candidate if the machine becomes primarily shared compute.

---

## Related

- [[MATE-Automation]] — primary research codebase that may use the node.
- [[Auto_Research/INDEX|Auto-Research Master Index]] — existing remote-compute and experiment-execution reference.
- [[ResNet]] — primary ML model focus.
- [[Vision Transformer]] — secondary ML model focus.
- [[Windows_PC_Sale/README|Windows PC sale prep]] — separate Windows-machine handoff; verify hardware identity before reusing any host details.

---

## Notes

The node is a shared infrastructure project, not a replacement for the Mac workstation. Hardware, network reachability, storage capacity, maintainer ownership, and the need for Windows-specific software must be verified before the final architecture is selected.
