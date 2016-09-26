import RecoArticles from './lib/RecoArticles';
import { render } from 'react-dom';

const renderComponent = (parent, props) => {
  render(<RecoArticles {...props} />, parent);
}
module.exports = renderComponent;
