---
title: Making a Portfolio
description: The making of this very site!
publishedAt: 2025-06-01
---

![A picture of this site's Homepage](/blog/site-making/personal-site-v4_1-homepage.png)

## Why a personal site?

The first question is why I would build and maintain a personal site? A personal site is a great opportunity to gain a couple of things.

1. An opportunity to practice UX design in a manner different to my day-to-day duties
2. To provide a place for publicly exploring new ideas and concepts
3. To create an avenue for passively discovering new opportunities and giving those new opportunities a way to connect with me

## The history of this site

### Origins

Conceptually, this site has been in the works for a long time. The first crack at the design I took came in 2020 as I geared up for applying to apprenticeship positions and figured that a personal site would be a great way to stand out.

![Original Site Design Image](/blog/site-making/personal-site-original-design.png)

It was at this time that original ideas for the iconography and typography arose, the general colour theme as well as some of the key structural ideas. However, before I managed to build this version I recieved an offer for the apprenticeship from Goldman Sachs and moved on to preparing myself for that role, so this version never saw a real deployment.

Fast forward to the start of 2025. I have completed my apprenticeship and want to begin to open up my options again. The project is resurrected and I start redesigning using the skills I learned over the preceeding 4 years. Designs for version two play around with various more bold choices, high in interactivity and complexity. Considerations included a console-inspired menu/applet system, a canvas based knowledge graph and a resurrection of a side project which rendered a procedurally generated pixelart space scene using webGL.

### Version 3

![Version 3 of my personal site](/blog/site-making/personal-site-v3-homepage.png)
Version 3 is where I begin to hone in on the 'true' intention of the site, stripping back the complexity and focusing on the essentials for a good MVP. I settle on a simple intro animation for initial visual flair, and a 4-part site structure. The focus here is on shipping _something_ with far less focus on ensuring that that thing is perfect.

From here I built and shipped version 3 within a weekend. It was very simple, content light and not particularly robust (On mobile the site was basically unusable). However, having it in the wild allowed me to really see the flaws in it and hone in on them effectively for the next version.

## Version 4

And so we land at this: Version 4. Version 4 prioritised a few things:

- Reintroduce some additional design flair - Version 3 ended up feeling somewhat _over_-simplified
- Build mobile first and scale up - Scaling version 3 down for mobile was more difficult than expanding version 4 horizontally
- Improve the density of the landing page - The landing page being more upfront and to-the-point massively improves the user experience.

Like many portfolios, the landing page was most heavily influenced by the excellent [Ted AWF](https://tedawf.com/). My primary variation was to reduce the reflection of traditional CV/Resume structure for a more project-first approach.

### Tech Choices

Version 4 was originally built using the exact same stack as version 3: Bun, Vite, Vue and Tailwind alongside some smaller helper libraries. This allowed me to lift still-good components such as the timeline across with ease. This got me far enough to get a first cut deployed, uplifting the mediocre mobile experience of the first version.

However, I still needed to add the blog. To achieve this, I switched to using Nuxt which unlocked use of the 'Nuxt Content' module.

The switch to Nuxt also came with some additional benefits:

- Better Static Site Generation for improved SEO (Including automatic sitemaps)
- Out of the box modules for icons, fonts and images reducing my reliance on custom solutions
- Easier building of custom error pages which interface nicely with the static hosting solution

I stuck with rendering a static copy of the site served via [static-web-server](https://static-web-server.net/) rather than deploying a Nitro server on my K8s cluster. This ensures that page load times are kept ultra fast with very minimal resource requirement and should maintain good SEO performance.

The site is hosted on my personal homelab k3s cluster and proxied to my domain via a cloud VPS.

The source code is available on my [GitHub](https://github.com/SBMous/personal-site).

## Inspirations

I believe that almost nothing worthwhile is built without reference to a number of inspirations which have come before. I also believe in acnowledging where that inspiration was lifted from where possible. The following is as complete of a list as possible of sites I consulted as inspiration for the layout, design and content of this one. Some only in a single element, others more broadly.

- [Zed](https://zed.dev/)
- [Ted Awf](https://tedawf.com/)
- [Ottomated](https://ottomated.net)
- [vin.gg](https://vin.gg)
- [xnacly](https://xnacly.me/)
- [Cobalt](https://cobalt.tools/)
- [GoblinOats](https://goblinoats.com)
- [HarryKingdon](https://www.harrykingdon.com/)
- [nicholaschen.io](https://nicholaschen.io/)
- [Joe Carlsmith](https://joecarlsmith.com/)
