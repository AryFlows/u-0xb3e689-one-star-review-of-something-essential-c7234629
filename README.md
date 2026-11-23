# One-Star Review of Something Essential

[![Competition](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/AryFlows/u-0xb3e689-one-star-review-of-something-essential-c7234629/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/AryFlows/u-0xb3e689-one-star-review-of-something-essential-c7234629/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

A deadpan one-star review of gravity, written as a single line for the
[make.fun bounty](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629).

## The review

> One star. Gravity has dropped everything I own at least once and refuses to apologise, let alone pick any of it up.

The review is 115 characters, one line, no trailing newline — inside the
1–160 character gate.

## How to run

```sh
node main.ts
```

This writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when unset).

## Verification

Run `main.ts`, then check the output is a single line of 1–160 characters
with no trailing newline:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-star-out node main.ts
wc -c /tmp/one-star-out/entry.txt
```
