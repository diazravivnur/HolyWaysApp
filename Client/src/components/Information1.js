import style from "./information1.module.css";

function Information1() {
  return (
    <div className="red-box">
      <div className={style.header}>
        <p>
          {" "}
          While you are still standing, try to reach out to the people who are
          falling.
        </p>
      </div>
      <div className={style.paragraph}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div>
        <button type="button" className={style.button}>
          Donate Now
        </button>
      </div>
      <div>
        <img
          src="/information1.svg"
          alt="information1-holyways"
          className={style.picture1}
        />
      </div>
    </div>
  );
}

export default Information1;
