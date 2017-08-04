import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import glamorous from 'glamorous';

const Item = glamorous(({ name, route, className, ...props }) =>
  <li>
    <Link {...props} href={route}>
      {props.length
        ? <a className={className}>
            {name}
          </a>
        : <a className={className}>
            {name}
          </a>}
    </Link>
  </li>
)(({ isActive }) => ({
  color: isActive ? 'hotpink' : 'orangered',
}));

const getItems = (sitemap, path) => {
  const out = Object.keys(sitemap).find(k => sitemap[k].files.find(f => f === path));
  return sitemap[out].files.map(k => sitemap[k]);
};

const SideNav = glamorous(({ sitemap, path, ...props }) =>
  <ul {...props}>
    {getItems(sitemap, path).map(item => <Item {...item} isActive={item.route === path} />)}
  </ul>
)({
  background: 'none',
  border: '0 none',
  padding: 0,
  width: 30,
  '& > *': {
    height: '100%',
    width: 'auto',
  },
});

SideNav.displayName = 'SideNav';
SideNav.propTypes = {
  sitemap: PropTypes.arrayOf(PropTypes.object),
};

export default SideNav;