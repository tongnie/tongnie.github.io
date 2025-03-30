---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

👋 My name is Tong Nie (聂通 in Chinese). I'm currently a third-year PhD student at both The Hong Kong Polytechnic University and Tongji University, supervised by [Prof. Jian Sun](https://tops.tongji.edu.cn/info/1031/1187.htm) and [Dr. Wei Ma](http://weima171.com/). My PhD research project was conducted under the support of the [PolyU Presidential PhD Fellowship Scheme](https://www.polyu.edu.hk/gs/prospective-students/fellowship-scholarship-schemes/pppfs/), and was funded by the National Natural Science Foundation of China (NSFC). Prior to joining PolyU, I earned my B.S. (2022) in Civil Engineering at Tongji University, Shanghai, China.
I'm now conducting research with the [PolyU Mobility AI Lab](http://polyu-mobility-ai-lab.com/) and [TOPS](https://tops.tongji.edu.cn/).

My research focuses on developing learning-based solutions to advance the sensing, modeling, and managing of transportation systems, with a particular interest in **spatiotemporal models**. From a macro perspective, I have developed: 

- **Tensor-based low-rank models for sparse sensing of traffic data**, e.g., point-wise traffic data imputation and location-wise traffic flow estimation:
  - [Truncated tensor Schatten p-norm based approach for spatiotemporal traffic data imputation with complicated missing patterns](https://doi.org/10.1016/j.trc.2022.103737) (TRC 2022)
  - [Correlating sparse sensing for large-scale traffic speed estimation: A Laplacian-enhanced low-rank tensor kriging approach](https://doi.org/10.1016/j.trc.2023.104190) (TRC 2023)
    
- **Generalizable graph neural networks and Transformers**, e.g., Transformers combined with the graph inductive bias:
  - [Towards better traffic volume estimation: Jointly addressing the underdetermination and nonequilibrium problems with correlation-adaptive GNNs](https://doi.org/10.1016/j.trc.2023.104402) (TRC 2023)
  - [ImputeFormer: Low Rankness-Induced Transformers for Generalizable Spatiotemporal Imputation](https://doi.org/10.1145/3637528.3671751) (KDD 2024)
  
- **Simple-yet-efficient models for large-scale time series forecasting**, e.g., MLP-Mixers, Low-rank channel mixing, and lightweight graph Transformers:
  - [Channel-Aware Low-Rank Adaptation in Time Series Forecasting](https://doi.org/10.1145/3627673.3679884) (CIKM 2024)
  - [Contextualizing MLP-Mixers Spatiotemporally for Urban Traffic Data Forecast at Scale](https://doi.org/10.1109/TITS.2024.3491754) (IEEE TITS 2024)

- **Implicit neural representations (INRs) for continuous spatiotemporal modeling**, e.g., meta learning based INRs:
  - [Spatiotemporal Implicit Neural Representation as a Generalized Traffic Data Learner](https://doi.org/10.1016/j.trc.2024.104890) (TRC 2024)
  - [Collaborative imputation of urban time series through cross-city meta-learning](https://doi.org/10.48550/arXiv.2501.11306) (ICLR 2025 workshop)

- **Location-based spatiotemporal modeling**,
 - [Joint Estimation and Prediction of City-wide Delivery Demand: A Large Language Model Empowered Graph-based Learning Approach](https://doi.org/10.1016/j.tre.2025.104075) (TRE 2025)
  
From a micro perspective, I'm currently trying to develop models that learn to reconstruct, predict, and generate both *realistic* and *adversarial* traffic scenarios for the development and testing of end-to-end autonomous driving systems🚗.
- **Adversarial traffic scenario generation with LLMs**
   - [LLM-attacker: Enhancing Closed-loop Adversarial Scenario Generation for Autonomous Driving with Large Language Models](https://doi.org/10.48550/arXiv.2501.15850)

In addition to transportation, I'm also interested in large vision/language models, urban computing, sustainability science, AI for social good applications.
- **Geospatial AI**
  - [Geolocation Representation from Large Language Models are Generic Enhancers for Spatio-Temporal Learning](https://doi.org/10.48550/arXiv.2408.12116) (AAAI 2025)
- **Sustainability science**
  - Large Language Models as a New Modality for Earch Data Monitoring (ICLR 2025 workshop on tackling climate change with machine learning)
- **Large Language Models**
- [Exploring the Roles of Large Language Models in Reshaping Transportation Systems: A Survey, Framework, and Roadmap](https://arxiv.org/abs/2503.21411)

📣 Recent News
======
- 📢 April 2025:  Our xx is preprinted on arXiv🔥
- 📢 March 2025:  Our paper on xxx was accepted by  🎉

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.


For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
