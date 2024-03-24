from flask import Flask
from data import test
from data import plot_risk_of_outbreak
from data import plot_cases
from data import plot_hospital_capacity
from data import plot_current_risk
app = Flask(__name__)

@app.route("/")
def plot_test():
    return test()


@app.route("/outbreak")
def outbreak_chart():
    return plot_risk_of_outbreak()


@app.route("/case")
def case_chart():
    return plot_cases()

@app.route("/capacity")
def capacity_chart():
    return plot_hospital_capacity()

@app.route("/risk")
def risk_chart():
    return plot_current_risk()




