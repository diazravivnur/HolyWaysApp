import style from "./information2.module.css";

const Information2 = () => {
  return (
    <div>
      <div className={style.header}>
        <p>
          Your donation is very helpful for people affected by forest fires in
          Kalimantan.
        </p>
      </div>
      <div className={style.paragraph1}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className={style.paragraph2}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className={style.pictures}>
        <img
          src="/information2.svg"
          alt="information1-holyways"
          className="pictures"
        />
      </div>
    </div>
  );
};

export default Information2;
