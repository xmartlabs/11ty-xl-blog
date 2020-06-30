---
title: "Migrate blog"
excerpt: "Migrating the blog."
date: 2020-06-01 10:00:00
author: Renzo Gambone
tags: [Xmartlabs, Deep Learning, Optimization]
category: machine-learning
author_id: renzo
featured_image: /images/how-to-speed-up-inference-in-your-deep-learning-model/speed-up.jpg
show: true

---

Did you obtain good accuracy with your deep learning model only to find out that inference time isn't enough to deploy on production? Are you lost on how to optimize your model's inference speed? Then this post is for you.

<div style="text-align: center"><img width="100%" src="/images/how-to-speed-up-inference-in-your-deep-learning-model/speed-up.jpg" /></div>

- Base project (Barreto vs https://github.com/11ty/eleventy-base-blog)
- Useful commands in package.json
- Migrating jekyll.yml to _data (jsons)
- Moving assets js, css, simple index page
- Move layouts (make sure to comment out every weird logic such as iterating in posts or filters)
- Fix all liquid filters to njk
- Add markdown support to eleventy.js
- Move blogs and use collections to iterate
- Start fixing page. to metadata. or post.


- Integrate HTML blogs

## To sum up

In this blog, we've described five approaches to improve the inference time of your deep learning model.
In particular, we'd advise you to implement them in the order we also listed them in, because any coding we do to implement model quantization and automatic mixed-precision is of great value to any further changes we make on our model.

We hope that this article was of value to you, either by giving you guidance on an issue you're currently facing or by arming you with our knowledge should the need arise for it!


**Let us know if you have an approach to speed up your model's inference that wasn't covered in this blogpost... Have any question about model's inference speed optimization? We'd be happy to answer those in the comments if we can.**
