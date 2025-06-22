---
title: Adversarial Pool Betting
description: A method for crowdsourcing accurate estimates of qualitative 'goodness' scores of companies
publishedAt: 2025-06-22
---

'Adversarial Pool Betting' is a name for an, as far as I'm aware, original betting system which can be used to build a numerical estimate of collective sentiment towards an organisation or company.

## Reputational Markets

Lets take a step back - why would this system need to exist? In Kristian Ronn's 2024 book 'The Darwinian Trap' he proposes the concept of reputational markets - markets that allow people to make profit from accurate predictions of a company's reputation^[Reputation in this sense is a representation of alignment with collective values].

Kristian's proposal of superintelligent AI auditors is ambitious, radical, and probably unrealistic in the near timeframe. However, the underlying concept of capturing a quantitative estimate of organisations' qualititative reputation holds significant potential. Such a score could drive investment decisions, creating a competitive advantage for companies which maintain a good reputation.

## Adversarial Pool Betting

The Adversarial Pool Betting approach represents a company's reputation on a continuous scale from bad to good.

![The sliding scale of reputational score from very bad to very good.](/blog/adversarial-pools/score-scale.png)

> Note: A company's reputational score could take a few meanings. We may want a nebulous 'is this company doing good or bad', or we may want to have a small portfolio of reputational scores which assert if a company is good/bad in relation to specific pillars of the human experience.

An organisation's score is adjusted by people placing bets on whether or not the score is accurate. In a simple example, suppose the pool accepts 'Higher/Lower' bets. If I think the score is too low, I can place a 'higher' bet. This nudges the real score a tiny amount higher than it was previously.

The money which I bet is now placed into a pool for a vesting period. During this time other individuals can make their own bets which adjusts the score further. Once this vesting period ends, I am paid out based on if my bet is correct or not. If the score when my bet resolves is higher, I profit by taking some value from those who bet incorrectly. If it is not, my bet is shared amongst those who were correct.

![Four stages exemplifying the movement of a reputational score as bets are placed.](/blog/adversarial-pools/timeline.png)

## Features

The core of this system is derived from the existence of a shared betting 'pool'. This pool holds all of the funds from as-yet-unresolved bets. It is from this pool that we gain the necessary funds to be able to pay out winning bets.

The system is nicely balanced in that it naturally encourages people to take adversarial (Against the trend) positions as their chance for gain is higher. Where there are more people betting against them the reward pool is larger.

## Implementing

There are a large number of ways in which I can imagine an adversarial betting pool system taking shape. These different iterations are largely defined by three primary decisions:

Firstly, we decide when bets are made and paid. For the sake of simplicity, we assume that all bets are forced to vest for the same duration (Or by the same rules). If a user wants a longer duration bet, they would be able to achieve this through spreading their investment over multiple bets and reinvesting any winnings. Our options for this are:

- Fixed-Cadence Payouts (All payouts simultaneously on the first day of every 6 months, bets vest for 1 'cadence')
- Rolling Payout (Payout as soon as vesting duration is up, for example after 180 days)
- Continuous Payout (Ie. Pay out a small % of reward every hour if currently winning, total bet is paid over 180 days)

Secondarily, we decide what the contents of a bet is and how this contributes to the score:

- Binary Higher/Lower Betting
- Score Prediction

Finally, we have to decide how we spread the returns from the betting pool^[For this, I assume universally that a single bet of 100 'coins' should be paid out identically to 100 bets of 1 'coin', all other things being equal]. This methodology somewhat needs to be tuned based on the above decisions but the major examples include:

- Even split of loser funds amongst winners
- Linear spread of funds based on prediction accuracy relative to other predictors (Organise predictions into a leaderboard, pay the worst prediction nothing and scale up from there)
- Linear spread of funds based on prediction accuracy (Spread funds evenly based on calculated distance of score from actual relative to the full range of the scale)
- Quadratic/Exponential/Logarithmic versions of the above

Of these options, a few combinations leap out as particularly intriguing to explore:

1. Fixed Cadence, Higher/Lower, Even Split - This is almost definitely the simplest possible Adversarial Pool to implement, and so could be a great starting point although may not offer a particularly enticing rate of reward
2. Continuous Payout, Score Prediction, Linear Accuracy Spread - This, whilst more complex, potentially offers a more dynamic and interesting system where individuals who are better predictors can multiply their gains massively. The important problem to solve with this is how to make sure individuals making wild guesses are rewarded accordingly if they are correct to prevent stagnation

## What Next?

Adversarial Betting Pools have the advantage that they have options which are relatively simple to implement which means we should be able to get tools which we can experiment with relatively quickly. From here, we probably want to build some basic test versions so we can explore the more subjective experience of how betting within this system ‘feels’ and whether the dynamics of the system actually create a compelling market.
