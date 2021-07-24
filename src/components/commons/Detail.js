import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailContainer = styled.div`
  display: inline-block;
  margin:7px 5px;
  font-size: 12px;
  border-collapse : collapse;
  
   @media (max-width: 820px) {
       margin : 15px 0px;
    } 
`;

const DetailTagContainer = styled.a`
   border: 1px solid #cdcfd1;
   border-width: 1px 0px 1px 1px;
   text-decoration:none;
   padding: ${prop => prop.padding};
   border-radius : 2px 0px 0px 2px;
   background-color : ${prop => prop.backgroundColor};
   line-height: 20px;
   cursor : pointer;
   font-weight : bold;
   color : #586069;
   &:hover {
     background-color : ${prop => prop.backgroundColor};
   }
`;


const DetailValueContainer = styled.a`
   border: 1px solid #cdcfd1;
   padding: ${prop => prop.padding};
   border-radius : 0px 2px 2px 0px;
   line-height: 20px;
   text-decoration:none;
   color : #586069;
   font-weight : bold;
   cursor : pointer;
   background-color : ${prop => prop.backgroundColor};

`;


const Detail = ({
  tagBackgroundColor, tagPadding, tag,
  valueBackgroundColor, valuePadding, value,
}) => (
  <DetailContainer>
    <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
    <DetailTagContainer
      backgroundColor={tagBackgroundColor}
      padding={tagPadding}
    >
      {tag}
    </DetailTagContainer>
    <DetailValueContainer
      backgroundColor={valueBackgroundColor}
      padding={valuePadding}
    >
      {value}
    </DetailValueContainer>
  </DetailContainer>
);

export default Detail;


Detail.propTypes = {
  tagBackgroundColor: PropTypes.string.isRequired,
  valueBackgroundColor: PropTypes.string.isRequired,
  tagPadding: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  tagHref: PropTypes.string.isRequired,
  valueHref: PropTypes.string.isRequired,
  valuePadding: PropTypes.string.isRequired,
};
