import React from 'react';
import './index.css';


function RecipeCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="food picture" width="300" height="200" />
      <h2>{props.name}</h2>
      <p><b>Time:</b> {props.time} ⏱️</p>
      <p><b>Difficulty:</b> {props.difficulty} 🚦</p>
      
      <h3>Ingredients:</h3>
      <ul>
        {props.ingredients.map(function(item, index) {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <center>
        <h1>Recipe App 🍳</h1>
      </center>
      
      <div className="container">
        
        <RecipeCard 
          name="Spicy Garlic Shrimp Pasta" 
          time="25 mins" 
          difficulty="Easy" 
          image="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          ingredients={['Shrimp', 'Linguine', 'Garlic', 'Chili Flakes']}
        />

        <RecipeCard 
          name="Classic Beef Wellington" 
          time="2 hrs" 
          difficulty="Hard" 
          image="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          ingredients={['Beef', 'Pastry', 'Mushrooms', 'Mustard']}
        />

        <RecipeCard 
          name="Vegetarian Buddha Bowl" 
          time="35 mins" 
          difficulty="Medium" 
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          ingredients={['Quinoa', 'Chickpeas', 'Avocado', 'Kale']}
        />

        <RecipeCard 
          name="Creamy Mushroom Risotto" 
          time="45 mins" 
          difficulty="Medium" 
          image="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          ingredients={['Rice', 'Mushrooms', 'Parmesan', 'Wine']}
        />

        <RecipeCard 
          name="Lemon Pancakes" 
          time="20 mins" 
          difficulty="Easy" 
          image="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          ingredients={['Flour', 'Blueberries', 'Lemon', 'Milk']}
        />
      </div>
    </div>
  );
}

export default App;
