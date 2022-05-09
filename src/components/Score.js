const Score = ({ myScore }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontWeight: 500, fontSize: "2rem", textAlign: "center" }}>
          your score is
        </p>
      </div>
      <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-tick-user-interface-flatart-icons-lineal-color-flatarticons.png" />
      <p style={{ fontWeight: 500, fontSize: "2rem" }}>{myScore}/5</p>
    </div>
  );
};

export { Score };
