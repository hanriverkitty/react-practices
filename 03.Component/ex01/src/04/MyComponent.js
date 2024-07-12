import React from "react";
import { PropTypes } from "prop-types";

function MyComponent({
  props01,
  props02,
  props03,
  props04,
  props05,
  props06,
  props07,
  props08,
  props09,
}) {
  return (
    <div>
      <h2>Property Validation</h2>
      <span>
        props01: {typeof props01 !== "undefined" ? props01 : "디폴트값"}
      </span>
      <br />
      <span>
        props02: {typeof props02 !== "undefined" ? props02 : "디폴트값"}
      </span>
      <br />
      <span>
        props03: {typeof props03 !== "undefined" ? `${props03}` : "디폴트값"}
      </span>
      <br />
      <span>
        props04: {typeof props04 !== "undefined" ? props04.name : "디폴트값"}
      </span>
      <br />
      <span>
        props05:{" "}
        {typeof props05 !== "undefined"
          ? props05.map((e, i) => (
              <b key={i}>
                {i}: {e}&nbsp;&nbsp;&nbsp;&nbsp;
              </b>
            ))
          : "디폴트값"}
      </span>
      <br />
      <span>
        props06: {typeof props06 !== "undefined" ? props06() : "디폴트값"}
      </span>
      <br />
      <span>
        props07: {typeof props07 !== "undefined" ? props07 : "디폴트값"}
      </span>
      <br />
      <span>
        props08:
        {typeof props08 !== "undefined"
          ? props08.map((e, i) => {
              return <b key={i}>{`${e}`}&ensp;&ensp;&ensp;</b>;
            })
          : "디폴트값"}
      </span>
      <br />
      <span>
        {"props09:"}
        {typeof props09 !== "undefined" ? (
          <div>
            <h3>{props09.no}</h3>
            <h4>{props09.name}</h4>
            <h5>{props09.email}</h5>
          </div>
        ) : (
          <strong>{"디폴트값"}</strong>
        )}
      </span>
    </div>
  );
}

MyComponent.propTypes = {
  /* Javascript data type */
  props01: PropTypes.string,
  props02: PropTypes.number.isRequired,
  props03: PropTypes.bool.isRequired,
  props04: PropTypes.object.isRequired,
  props05: PropTypes.array.isRequired,
  props06: PropTypes.func.isRequired,

  /* combination */
  props07: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
  props09: PropTypes.shape({
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

MyComponent.defaultProps = {
  props02: 0,
  props03: false,
  props04: {},
  prpos05: [],
  props06: () => {},
};
export default MyComponent;
