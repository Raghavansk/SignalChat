import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent,ActionMenu } from '@pega/cosmos-react-core';

const RArticle = (props) => {
    const {content} = props;
    return (
        <>
        <Card >
            <CardContent>{content}</CardContent>
        </Card>
        <ActionMenu
        actions={[
          [{ text: 'Option Number 1', id: '1' }],
          [
            { text: 'Option Number 2a', id: '2a' },
            { text: 'Option Number 2b', id: '2b' }
          ],
          [{ text: 'Option Number 3', id: '3' }]
        ]}
      />
        </>
    )
}

RArticle.propTypes = {
    content: PropTypes.string
}
export default RArticle;