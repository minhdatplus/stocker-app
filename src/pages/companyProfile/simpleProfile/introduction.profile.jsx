import React from 'react';

const IntroductionProfile = ({ companyProfile }) => {
  const { companyprofile } = companyProfile || {};

  return (
    <div>
      {companyprofile && (
        <div className="content" dangerouslySetInnerHTML={{ __html: companyprofile }} />
      )}
    </div>
  );
};

export default IntroductionProfile;
