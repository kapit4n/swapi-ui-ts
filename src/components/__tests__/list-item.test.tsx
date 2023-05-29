import { render, screen } from '@testing-library/react';
import ListItem from '../list-item';
import { MemoryRouter } from 'react-router-dom'

jest.mock('axios');

test('render title and fields', () => {
  const titleField = 'name';
  const descriptionFields = ['description'];
  const dataSource = { name: "Object Name", description: "DataSource Example" };
  const imagePlaceholder = 'image.jpg';
  const objectType = 'people';
  const mainRoute = 'people';

  const props = {
    data: {titleField, descriptionFields, dataSource, imagePlaceholder, objectType, mainRoute},
    route: 'people',
    onClickSetCurrent: () => { }
  }

  render(<MemoryRouter><ListItem data={props.data} onClickSetCurrent={props.onClickSetCurrent} /></MemoryRouter>);

  const nameLabel = screen.getByText(/name/i);
  expect(nameLabel).toBeInTheDocument();

  const descriptionLabel = screen.getByText(/description/i);
  expect(descriptionLabel).toBeInTheDocument();

  
  const nameValue = screen.getByText(/Object Name/i);
  expect(nameValue).toBeInTheDocument();

  const descriptionValue = screen.getByText(/DataSource Example/i);
  expect(descriptionValue).toBeInTheDocument();
});

