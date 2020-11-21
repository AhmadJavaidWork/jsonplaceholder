import Api from '../../api';
import router from '../../router';
import store from '../../store';

export const GETALL = async (context, URL, mutation) => {
  const res = await Api().get(`${URL}`);
  context.commit(mutation, res.data);
};

export const GET = async (context, URL, mutation, id) => {
  const res = await Api().get(`${URL}/${id}`);
  if (!res.data.error) context.commit(mutation, res.data);
};

export const POST = async (context, URL, mutation, data) => {
  const res = await Api().post(`${URL}`, data);
  if (res.data.error === 'You are not authenticated') {
    store.dispatch('signout');
    router.push('/signin');
  }
  if (res.data) context.commit(mutation, res.data);
};

export const PUT = async (context, URL, mutation, data, id) => {
  const res = await Api().put(`${URL}/${id}`, data);
  if (res.data.error === 'You are not authenticated') {
    store.dispatch('signout');
    router.push('/signin');
  }
  if (res.data) context.commit(mutation, res.data);
};
