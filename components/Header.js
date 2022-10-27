import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export const Header = ({ navigation, settings }) => {
  return (
    <div className="header">
      <div className="title">
        <PrismicLink href={`/`}>
          <PrismicText field={settings.data.siteTitle}/>
        </PrismicLink>
      </div>
      <div className="links">
        {navigation.data.links.map((item, i) => {
          return(
            <PrismicLink field={item.link} key={`nav${i}`}>
              <PrismicText field={item.label}/>
            </PrismicLink>
          )
        })}
      </div>
    </div>
  );
};
