import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  children: null,
  tag: "h2",
};

const SectionHeader = ({ className, data, children, tag, ...props }) => {
  const classes = classNames("section-header", className);

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) && (
        <div {...props} className={classes}>
          <div className="container-xs">
            {children}
            {data.title && (
              <Component
                className={classNames(
                  "mt-0",
                  data.paragraph ? "mb-16" : "mb-0"
                )}
              >
                EXPLAINING A CONCEPT
              </Component>
            )}
            {data.paragraph && (
              <p className="m-0">
                In this video I will cover on how I would I explain a simple
                concept to a friend. I simply broke it down to simple steps and
                made sure I had an example. Enjoy!
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
