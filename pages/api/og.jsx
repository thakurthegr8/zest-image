import { ImageResponse } from "@vercel/og";
import React from "react";
import basic from "../../templates/basic";

export const config = {
  runtime: "edge",
};

const templateGenerator = (template, params) => {
  if (template.length != undefined) {
    const children = template.map((item, index) => {
      const props = {
        ...item.props,
        key: index,
        style: {
          ...item.props.style,
          color: params?.color ? params?.color : item.props.style.color,
        },
      };
      if (item.type === "p" || item.type === "h1") {
        return React.createElement(item.type, props, params[item.variant]);
      }
    });
    return children;
  }
  if (typeof template.children != "object") {
    return React.createElement(template.type, props, template.children);
  }
  const props = {
    ...template.props,
    style: {
      ...template.props.style,
      backgroundColor: params?.backgroundColor
        ? params.backgroundColor
        : template.props.style.backgroundColor,
      backgroundImage: `url(${
        params?.backgroundImage
          ? params.backgroundImage
          : template.props.style?.backgroundImage
      })`,
    },
  };
  return React.createElement(
    template.type,
    props,
    templateGenerator(template.children, params)
  );
};

export default function handler(req) {
  const template = basic;
  const { searchParams } = new URL(req.url);
  let params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  console.log(params);
  return new ImageResponse(templateGenerator(template, params), {
    width: 640,
    height: 640,
  });
}
