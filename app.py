"""Main app entry point."""
from flask import Flask, render_template


app = Flask("Lido")


@app.route("/")
def index():
    """Main home route.

    Returns:
        The index.html template
    """
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
