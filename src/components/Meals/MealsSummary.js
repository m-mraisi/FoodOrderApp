import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your Favorite Food Delivered to Your Door step</h2>
      <p>
        Pick your favorite meals from our various selection of cuisines and
        enjoy a tasty food at the comfort of your home.
      </p>
      <p>
        Vegan, vegetarian food, and all! And of course all our meals are cooked
        by experienced chefs with the best ingredients just picked for you!
      </p>
    </section>
  );
};

export default MealsSummary;
