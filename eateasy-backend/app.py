from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def welcome():
    return 'Welcome to the EatEasy API!'

# Sample route for menu
@app.route('/menu')
def get_menu():
    # Logic to fetch menu items from database
    menu_items = ['Burger', 'Pizza', 'Pasta']
    return jsonify({'items': menu_items})

# Sample route for placing an order
@app.route('/order', methods=['POST'])
def place_order():
    # Logic to place an order
    return jsonify({'message': 'Order placed successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=3001)
