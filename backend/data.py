import matplotlib.pyplot as plt, mpld3
import numpy as np
import pandas as pd
import json

def plot_risk_of_outbreak(num_days = 30):

    risk_of_outbreak = np.random.randint(0, 100, size=30)

    months = pd.date_range('2022-01-01', periods=len(risk_of_outbreak), freq='M').strftime('%b %Y')
    fig = plt.figure(figsize=(8, 6))
    plt.bar(range(len(risk_of_outbreak)), risk_of_outbreak, color='r')  
    plt.title('Risk of Outbreak')
    plt.xlabel('Date')
    plt.ylabel('Risk Level')
    plt.xticks(range(len(months)), months, rotation=45, ha='right') 
    plt.tight_layout()

    return mpld3.fig_to_html(fig)

def plot_cases(num_days = 30):
    
    cases = np.sort(np.random.randint(0, 50, size=num_days))
    fig = plt.figure(figsize=(8, 6))
    obj = plt.plot(cases, marker='o', color='g')


    plt.title('Cases')
    plt.xlabel('Days')
    plt.ylabel('Number of Cases')

    return mpld3.fig_to_html(fig)

def plot_hospital_capacity():
    return np.random.randint(1,101)

def plot_current_risk(num_days = 30):

    return np.random.randint(1,4)

def gen_table():
    d_table = {}
    d_table['Disease'] = ['Malaria', 'Aids', 'Ebola', 'Covid', 'Tuberculosis']
    d_table['Count'] = [np.random.randint(100,1000),np.random.randint(1,1000),np.random.randint(1,1000),np.random.randint(1,1000),np.random.randint(1,1000)]
    d_table['Deaths'] = []
    for x in d_table['Count']:
        d_table['Deaths'].append(x-np.random.randint(1,90))
    return json.dumps(d_table)


def test():
    x = [1,2,3,4,5]
    fig = plt.figure()
    obj = plt.plot(x)
    plt.title('test')
    return mpld3.fig_to_html(fig)

