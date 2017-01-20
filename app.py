from flask import Flask,render_template
from flask import request
from nlu import nlu
app=Flask(__name__)

@app.route("/")
def index():
    return(render_template("index.html"))

@app.route('/usrmsg/<msg>')
def get_post_javascript_data(msg):
    print(msg)
    return nlu(msg)

if __name__=="__main__":
    app.run(debug=True)