# TruHacks

For our project, we are tackling UN Sustainable Development Goal 3.3 which is "By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases"

Dengue is a tropical illness that is spread by mosquitos. The illness is deadly, causing flu and fever symptoms. Severe cases cause serious bleeding and death.

Our project consists of two parts.

1. A report of creating a model to predict Dengue outbreaks in Manila, Phillipines. This model was created using data science and Random Forests, a type of machine learning. The model shows that dengue outbreaks can be predicted using weather and previous case counts.
2. The next part consists of a website tracker to display graphs about dengue cases in a region. This mock website displays graphs concerning dengue outbreaks. This website is proof of concept, and all data is fake and random. Models like the one for Manila could be created for these areas. If supplied with real data, this could be applied in the real world. This would allow relief teams to better coordinate their efforts and allow people to avoid areas at risk of dengue spreading.

The code for running these parts are in the repository and guides on how to run them are below.

# Report

A report on predicting Dengue cases in Manila,Phillipines is in the `report` folder.This was created using Jupyter Notebooks. A compiled pdf of the report is in there, or you may directly look at the source code.

# Backend Setup
From the backend directory run the following:

```
pip install -r requirements.txt
```

```
flask --app server run
```

# Frontend Setup
From the frontend folder run the following:
```
npm install
```

```
npm run dev
```
