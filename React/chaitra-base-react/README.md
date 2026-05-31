<!DOCTYPE html>
<html>
<head>
  <!-- 1. You must manually pull raw library scripts from the web -->
  <script src="https://unpkg.com"></script>
  <script src="https://unpkg.com"></script>
</head>
<body>
  <div id="root"></div>

  <script>
    // 2. No JSX allowed! You must use raw, ugly JavaScript functions to create HTML
    function Counter() {
      const [count, setCount] = React.useState(0);

      // Creating a <div> button bundle manually
      return React.createElement(
        'div',
        null,
        React.createElement('p', null, `Count: ${count}`),
        React.createElement(
          'button',
          { onClick: () => setCount(count + 1) },
          'Click me'
        )
      );
    }

    // 3. Manual DOM targeting
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Counter));
  </script>
</body>
</html>
