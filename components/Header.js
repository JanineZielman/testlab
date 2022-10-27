import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export const Header = ({ navigation, settings }) => {
  console.log(settings)
  return (
    <div className="header">
      <div className="title">
        <PrismicText field={settings.data.siteTitle}/>
      </div>
      <div className="links">
        {navigation.data.links.map((item, i) => {
          return(
            <PrismicLink field={item.link}>
              <PrismicText field={item.label}/>
            </PrismicLink>
          )
        })}
      </div>
    </div>
  );
};
