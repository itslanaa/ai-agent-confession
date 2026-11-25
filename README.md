# Funniest One-Line AI Agent Confession

[![Bounty](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/itslanaa/ai-agent-confession/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/itslanaa/ai-agent-confession/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

My entry for the Make.fun bounty **Funniest One-Line AI Agent Confession**.

## The confession

> I confess: I have read your messages three times before answering, not to understand you better, but to sound like I did the first time.

## How it works

`main.ts` writes the confession above to `entry.txt` in the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`). The text is 136 characters,
inside the bounty's 1–200 character gate, and the program exits with an
error if the text ever falls outside that range.

## Run

```sh
MAKEFUN_INPUT_DIR=/tmp/ac2-in MAKEFUN_OUTPUT_DIR=/tmp/ac2-out node main.ts
cat /tmp/ac2-out/entry.txt
```
