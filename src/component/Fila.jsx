import { useEffect, useState } from 'react';

export const Fila = ({ product, category, price }) => {
  const [remove, setRemove] = useState(false);

  const [edit, setEdit] = useState(false);

  const [in1, setIn1] = useState(undefined);
  const [in2, setIn2] = useState(undefined);
  const [in3, setIn3] = useState(undefined);

  const isEdit = () => setEdit(true);

  const setInputs = () => {
    setIn1(document.getElementById('in1').value);
    setIn2(document.getElementById('in2').value);
    setIn3(document.getElementById('in3').value);

    ![in1, in2, in3].every((el) => el == null) && setEdit(false);
  };

  useEffect(() => {
    setIn1(product);
    setIn2(category);
    setIn3(price);
  }, []);

  return (
    <>
      {!remove && (
        <div
          style={{
            display: 'flex',
            gap: '5px',
            width: '567px',
            position: 'relative',
          }}
          onDoubleClick={isEdit}
        >
          <span>💥</span>
          {edit ? (
            <>
              <input
                style={{ textAlign: 'center' }}
                id="in1"
                type="text"
                placeholder="Producto"
                defaultValue={in1}
              />
              <input
                style={{ textAlign: 'center' }}
                id="in2"
                type="text"
                placeholder="Categoria"
                defaultValue={in2}
              />
              <input
                style={{ textAlign: 'center' }}
                id="in3"
                type="number"
                placeholder="Precio"
                defaultValue={in3}
              />
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  position: 'absolute',
                  right: '-60px',
                }}
              >
                <button style={{ padding: '0' }} onClick={setInputs}>
                  🟢
                </button>
                <button
                  style={{ padding: '0' }}
                  onClick={() => setRemove(true)}
                >
                  🔴
                </button>
              </div>
            </>
          ) : (
            <>
              <div style={{ flex: ' 33%', border: 'solid 1px' }}>{in1}</div>
              <div style={{ flex: ' 33%', border: 'solid 1px' }}>{in2}</div>
              <div style={{ flex: ' 33%', border: 'solid 1px' }}>{in3} $</div>
            </>
          )}
        </div>
      )}
    </>
  );
};
