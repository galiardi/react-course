import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  // console.log(props);

  return (
    <>
      <div data-testid="test-title"> {title} </div>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Fernando Herrera",
  subTitle: "No hay subtítulo",
  // title: "No hay titulo",
};
