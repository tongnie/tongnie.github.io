---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
layout: archive
---

👋 My name is Tong Nie (聂通 in Chinese). I'm currently a third-year PhD student at both The Hong Kong Polytechnic University and Tongji University, supervised by [Prof. Jian Sun](https://tops.tongji.edu.cn/info/1031/1187.htm) and [Prof. Wei Ma](http://weima171.com/). My PhD research project was conducted under the support of the [PolyU Presidential PhD Fellowship Scheme](https://www.polyu.edu.hk/gs/prospective-students/fellowship-scholarship-schemes/pppfs/), and was funded by the National Natural Science Foundation of China (NSFC). Prior to joining PolyU, I earned my B.S. (2022) in Civil Engineering from Tongji University, Shanghai, China, and started my research career by working with [Dr. Guoyang Qin](https://scholar.google.com/citations?user=RqB1UgYAAAAJ&hl=zh-CN) and [Prof. Chenglong Liu](https://charley33301.github.io/).
I'm now conducting research with the [PolyU Mobility AI Lab](http://polyu-mobility-ai-lab.com/) and [TOPS](https://tops.tongji.edu.cn/).

My research focuses on developing learning-based solutions to advance the sensing, modeling, and managing of transportation systems, with a particular interest in **spatiotemporal models**. From a **macro** perspective, I have developed: 

- **Tensor-based low-rank models for sparse sensing of traffic data**, e.g., point-wise traffic data imputation and sensor-wise traffic flow estimation:
  - [Truncated tensor Schatten p-norm based approach for spatiotemporal traffic data imputation with complicated missing patterns](https://doi.org/10.1016/j.trc.2022.103737) (**TRC 2022**)
  - [Correlating sparse sensing for large-scale traffic speed estimation: A Laplacian-enhanced low-rank tensor kriging approach](https://doi.org/10.1016/j.trc.2023.104190) (**TRC 2023**)
    
- **Generalizable graph neural networks and Transformers**, e.g., Transformers combined with the graph inductive bias:
  - [Towards better traffic volume estimation: Jointly addressing the underdetermination and nonequilibrium problems with correlation-adaptive GNNs](https://doi.org/10.1016/j.trc.2023.104402) (**TRC 2023**)
  - [ImputeFormer: Low Rankness-Induced Transformers for Generalizable Spatiotemporal Imputation](https://doi.org/10.1145/3637528.3671751) (**KDD 2024**)
  
- **Simple-yet-efficient models for large-scale time series forecasting**, e.g., MLP-Mixers, Low-rank channel mixing, and lightweight graph Transformers:
  - [Channel-Aware Low-Rank Adaptation in Time Series Forecasting](https://doi.org/10.1145/3627673.3679884) (**CIKM 2024**)
  - [Contextualizing MLP-Mixers Spatiotemporally for Urban Traffic Data Forecast at Scale](https://doi.org/10.1109/TITS.2024.3491754) (**IEEE TITS 2024**)

- **Implicit neural representations (INRs) for continuous spatiotemporal modeling**, e.g., meta learning based INRs:
  - [Spatiotemporal Implicit Neural Representation as a Generalized Traffic Data Learner](https://doi.org/10.1016/j.trc.2024.104890) (**TRC 2024**)
  - [Collaborative imputation of urban time series through cross-city meta-learning](https://doi.org/10.48550/arXiv.2501.11306) (**ICLR 2025 workshop on weight space learning**)

- **Location-based spatiotemporal modeling**:
  - [Joint Estimation and Prediction of City-wide Delivery Demand: A Large Language Model Empowered Graph-based Learning Approach](https://doi.org/10.1016/j.tre.2025.104075) (**TRE 2025**)
  
From a **micro** perspective, I'm currently trying to develop models that learn to reconstruct, predict, and generate both *realistic* and *adversarial* traffic scenarios for the development and testing of end-to-end autonomous driving systems🚗.
- **Adversarial testing of autonomous vehicles with LLMs**
   - [LLM-attacker: Enhancing Closed-loop Adversarial Scenario Generation for Autonomous Driving with Large Language Models](https://ieeexplore.ieee.org/abstract/document/11047235) (**IEEE TITS 2025**)
- **Online safety-critical scenario generation with LLMs**
  - [Seeking to Collide: Online Safety-Critical Scenario Generation for Autonomous Driving with Retrieval Augmented Large Language Models](https://doi.org/10.48550/arXiv.2505.00972) (**IEEE ITSC 2025**)
- **Contrastive language-scenario alignment**
  - [Semantic Alignment of Language and Motion Enables Zero-shot Generation of Multi-agent Scenarios], working in progress
- **Preference optimization for adversarial scenario generation**
  - [Controllable Adversarial Scenario Generation with Customizable Preference Alignment for Safe Autonomous Driving]

In addition to transportation, I'm also interested in large vision/language models, urban computing, sustainability science, AI for social good applications.
- **Geospatial AI**:
  - [Geolocation Representation from Large Language Models are Generic Enhancers for Spatio-Temporal Learning](https://doi.org/10.48550/arXiv.2408.12116) (**AAAI 2025**)
- **Sustainability science**:
  - Large Language Models as a New Modality for Earth Data Monitoring (**ICLR 2025 workshop on tackling climate change with machine learning**)
- **Large Language Models**:
  - [Exploring the Roles of Large Language Models in Reshaping Transportation Systems: A Survey, Framework, and Roadmap](https://www.sciencedirect.com/science/article/pii/S3050860625000031)  (**Artificial Intelligence for Transportation, Inaugural Issue, 2025**)

📣 Recent News
======
<div style="max-height: 500px; overflow-y: auto; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
<ul>
  <li>📢 Jul. 2025: Our previous work on graph-based large-scale spatiotemporal forecasting has been accepted at IEEE TII🎉! Paper will be online soon~  </li>
  <li>📢 Jul. 2025: Our paper on <a href="https://doi.org/10.48550/arXiv.2505.00972">LLM-based online safety-critical scenario generation</a> is accepted by ITSC 2025! See you in Gold Coast🎉 </li>
  <li>📢 Jun. 2025 [NEWS]: Our survey LLM4Tr has been published online at <a href="https://www.sciencedirect.com/science/article/pii/S3050860625000031">Artificial Intelligence for Transportation (AIT)</a> as an Inaugural Issue! 🔥 AIT is a new flagship journal in transportation led by COTA. A new venue for us to contribute research on AI in transportation studies! </li>
  <li>📢 Jun. 2025: LLM-Attacker (LLM-based safety-critical scenario generation of AVs) has been accepted at <a href="https://ieeexplore.ieee.org/abstract/document/11047235">IEEE TITS</a> ! 🎉 🔥</li>
  <li>📢 May 2025: Our paper on <a href="https://doi.org/10.48550/arXiv.2505.00972">LLM-based online safety-critical scenario generation</a> is preprinted on arXiv! 🔥</li>
  <li>📢 29, Apr. 2025: I have attended ICLR 2025 at Singapore and enjoyed a wonderful travel there!! So excited to learn from the ICLR community! Look forward to come back to Singapore next time! </li>
  <li>📢 07, Apr. 2025: I have been invited to give an online talk at a WeChat platform called "交通邦". It was a pleasure to share our work with the community! 📝Check out the slides <a href="../talks/LLM4TR-NIE-Tong.pdf">here</a>!</li>
  <li>📢 Apr. 2025: Our session proposal <a href="https://ieee-itsc.org/2025/wp-content/uploads/sites/4/2025/04/0011_MS.pdf">Innovative Applications of Large Language Models in Multimodal Transportation Systems</a> has been accepted as an Invited Session at ITSC 2025! Welcome to submit your paper (code: p25rt) and look forward to see you in Gold Coast🏖️!</li>
  <li>📢 Apr. 2025: Our latest survey paper on LLMs for transportation is preprinted on <a href="https://arxiv.org/abs/2503.21411">arXiv</a>!🔥</li>
  <li>📢 Mar. 2025: Our paper on LLM-enhanced demand estimation was accepted by Transportation Research Part E!🎉</li>
  <li>📢 Mar. 2025: I have two papers accepted by ICLR 2025 workshops. Look forward to see you in Singapore!</li>
  <li>📢 Jan. 2025: Our work received a lot of inspiring feedback from TRBAM 2025 in D.C. Hope to see you all next year!</li>
  <li>📢 Jan. 2025: Our latest research on <a href="https://doi.org/10.48550/arXiv.2501.11306">meta learning-based INRs for cross-city generalization</a> and <a href="https://doi.org/10.48550/arXiv.2501.15850">LLM-enhanced adversarial scenario generation</a> are preprinted on arXiv! 🔥</li>
  <li>📢 Dec. 2024: Our LLM2Geovec was accpeted by AAAI 2025 main track (≈ 23% acceptance rate)! We have received a lot of insightful feedback and suggestions from reviewers.</li>
  <li>📢 Nov. 2024: I received a funding from the National Natural Science Foundation of China (国家自然科学基金) as the principal investigator (PI). A milestone in my PhD journey!! 🎉🎉</li>
  <li>📢 Oct. 2024: Our paper on MLP-Mixer for traffic forecasting was accepted at IEEE TITS! 🎉</li>
  <li>📢 Sep. 2024: Our paper on spatiotemporal implicit neural representations was accepted at Transportation Research Part C! 🎉</li>
  <li>📢 Aug. 2024: I have attended KDD'24 at Barcelona and TRC-30 at Crete. We had a wonderful travel and enjoyed sharing our research with the community!</li>
  <li>📢 July. 2024: Our paper on low-rank channel adaptation was accepted by CIKM 2024 (≈ 23% acceptance rate)!</li>
  <li>📢 May. 2024: Our ImputeFormer was accepted at KDD 2024 (≈ 20% acceptance rate) by oral presentation! 🎉🎉</li>
</ul>
</div>



🗂️ Research projects
======
- **Automated Generation of Autonomous Driving Test Scenarios and Adversarial Testing Methods**, 2025.1-2027.12, 300,000 CNY, National Natural Science Foundation of China’s (国家自然科学基金) Fundamental Research Program for Young Students.

📧 Reach out to me
======
I'm happy to discuss and exchange ideas. Feel free to contact me (tong[dot]nie[at]connect[dot]polyu[dot]hk, nietong[at]tongji[dot]edu[dot]cn) if you are interested in my research or would like to collaborate.

