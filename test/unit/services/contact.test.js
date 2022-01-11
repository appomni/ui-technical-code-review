import contactService from '@/services/contact';
import axios from 'axios';

jest.mock('axios', () => ({
  delete: jest.fn((url) => url),
  patch: jest.fn(),
  get: jest.fn(() => ({})),
  post: jest.fn(async (url, contact) => ({ ...contact, id: 1234 })),
}));

const contactStub = {
  name: 'John Smith',
  id: 7357,
  email: 'contact@email.com',
};

describe('deleteContact', () => {
  it('returns response from delete request to expected endpoint', async () => {
    const expected = 'http://localhost:3000/contacts/7357';

    const actual = await contactService.deleteContact(contactStub);

    expect(actual).toBe(expected);
  });
});

describe('editContact', () => {
  it('makes patch request with contact as payload', async () => {
    const expected = ['http://localhost:3000/contacts/7357', contactStub];

    await contactService.editContact(contactStub);

    expect(axios.patch).toBeCalledWith(...expected);
  });
});

describe('getContacts', () => {
  it('makes get request', async () => {
    await contactService.getContacts();

    expect(axios.get).toHaveBeenCalled();
  });
});

describe('createContact', () => {
  it('returns response from post request', async () => {
    const expected = { ...contactStub, id: 1234 };

    const actual = await contactService.createContact(contactStub);

    expect(actual).toEqual(expected);
  });
});