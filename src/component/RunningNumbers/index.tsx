import { useSpring, animated } from "@react-spring/web";

export default function RunningNumbers(props: {
  n: number;
  c: string;
  to_fixed: number;
  is_currency: boolean;
  is_table: boolean;
}) {
  const { n, c, to_fixed, is_currency, is_table } = props;
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  function toCurrency(num: string) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  if (is_table) {
    return (
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <animated.p style={{ margin: "0px", fontSize: "18px" }}>
          {!is_currency
            ? number.to((n) => n.toFixed(to_fixed))
            : number.to((n) => toCurrency(n.toFixed(to_fixed)))}
        </animated.p>
        <span>{c}</span>
      </animated.div>
    );
  }

  return (
    <animated.div className="data_value">
      <animated.p>
        {!is_currency
          ? number.to((n) => n.toFixed(to_fixed))
          : number.to((n) => toCurrency(n.toFixed(to_fixed)))}
      </animated.p>
      <span>{c}</span>
    </animated.div>
  );
}
