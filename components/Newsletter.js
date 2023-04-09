import news from '../styles/Newsletter.module.css'
const Newsletter = () => {
  return (
    <div className={news.container}>
      <h2>SIGN UP FOR OUR NEWSLETTER </h2>
      <p>SAVE 10% ON YOUR FIRST PURCHASE </p>
      <form className={news.form}>
        <input type="text" className={news.input} placeholder="Email Address" />
        <input type="submit" className={news.btn} value="Subscribe" />
      </form>
    </div>
  );
}

export default Newsletter
