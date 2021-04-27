import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import budget from './budget.svg';

const App = () => {
  return (
    <AppProvider>
      <div className='container '>
        <h1 className='headone'><img width="80" height="120" src={budget} alt={"budget"} /><br />Калькулятор бюджету  </h1>
        <div className='row headtwo'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='heal'>Витрати</h3>
        <div className='row mt-3 stal'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='heal'>Додати витрати</h3>
        <div className='row mt-3 stal'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>

  );
};

export default App;