import React from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react';

const LoaderExampleText = () => (
  <div className="loading">
    <Dimmer active>
      <Loader>Carregando...</Loader>
    </Dimmer>

    <Image src="/images/wireframe/short-paragraph.png" />
  </div>
);

export default LoaderExampleText;
