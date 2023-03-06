import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Fernando Herrera",
  subtitle: "No hay subtítulo",
  // title: "No hay titulo",
};
