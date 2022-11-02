import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_MEALS_URI);
        if (response.status === 200) {
          setIsLoading(false);
        } else {
          throw new Error("Failed To fetch data");
        }
        const resData = await response.json();
        const loadedMeals = [];
        for (const key in resData) {
          loadedMeals.push({
            id: key,
            name: resData[key].name,
            description: resData[key].description,
            price: resData[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (err) {
        setError(err.message);
        return;
      }
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (error) {
    return (
      <section className={classes.HttpMessage}>
        <p>{error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
