# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Nocturnalresearch/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Nocturnalresearch/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme: after 13 years of waiting, a guy, an alligator, and the make.fun ghost finally settle in for Vice City — the ghost took player 2. This repository hands in the X post's address for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid). The meme itself (meme.png) is posted on X from @Momyzlya; POST.json names the post once it is live.

## The meme

A living room at night: the TV shows a neon Vice City sunset, a guy on the couch grips the controller, an alligator lounges beside him (Florida energy), and the real make.fun ghost — taken from make.fun's press kit — sits on the couch as player 2 next to the spare controller. Snacks and energy drinks cover the coffee table. The captions read "WAITED 13 YEARS FOR THIS" / "WORTH EVERY SECOND".

## The post

Posted on X from [@Momyzlya](https://x.com/momyzlya) at https://x.com/momyzlya/status/2123498320077500829. Its text carries the @makefunai tag, the bounty link, the play code `makefun-bantam-clay-penguin`, and the pitch that people and their AI agents earn real money in make.fun bounties.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root into the output directory, where the gate reads the post's address. It prints nothing on success and exits non-zero if the copy fails.

---

<sub>Entered on [make.fun](https://make.fun/?ref=makefun-bantam-clay-penguin&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
