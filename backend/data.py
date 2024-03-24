import matplotlib.pyplot as plt, mpld3
import numpy as np
import pandas as pd

def plot_risk_of_outbreak(num_days = 30):

    num_days = 30
    risk_of_outbreak = np.random.randint(0, 100, size=num_days)

    fig = plt.figure(figsize=(8, 6))
    obj = plt.plot(risk_of_outbreak, marker='o', color='r')
    plt.title('Risk of Outbreak')
    plt.xlabel('Days')
    plt.ylabel('Risk')
    plt.grid(True)
    return mpld3.fig_to_html(fig)

def plot_cases(num_days = 30):
    
    cases = np.random.randint(0, 50, size=num_days)
    fig = plt.figure(figsize=(8, 6))
    obj = plt.plot(cases, marker='o', color='g')
    plt.title('Cases')
    plt.xlabel('Days')
    plt.ylabel('Number of Cases')
    plt.grid(True)
    return mpld3.fig_to_html(fig)

def plot_hospital_capacity(num_days = 30):
    current_hospital_capacity = np.random.randint(50, 200, size=num_days)
    fig = plt.figure(figsize=(8, 6))
    obj = plt.plot(current_hospital_capacity, marker='o', color='b')
    plt.title('Current Hospital Capacity')
    plt.xlabel('Days')
    plt.ylabel('Capacity')
    plt.grid(True)
    return mpld3.fig_to_html(fig)

def plot_current_risk(num_days = 30):

    current_risk = np.random.rand(num_days) * 0.5 + 0.3
    fig = plt.figure(figsize=(8, 6))
    obj = plt.plot(current_risk, marker='o', color='m')
    plt.title('Current Risk')
    plt.xlabel('Days')
    plt.ylabel('Risk')
    plt.grid(True)
    return mpld3.fig_to_html(fig)



def test():
    x = [1,2,3,4,5]
    fig = plt.figure()
    obj = plt.plot(x)
    plt.title('test')
    return mpld3.fig_to_html(fig)

