# FlowCode

FlowCode is a web application that allows users to create and visualize flowcharts, which can then be translated into code. The application leverages React, TypeScript, Vite, Tailwind CSS, and React Flow to deliver an interactive and modern user experience.

## Features

- **Flowchart Creation:** Drag and drop various node types to build flowcharts.
- **Code Generation:** Automatically generate code from the flowchart elements.
- **Node Types:** Supports different node types including circles, rectangles, parallelograms, and diamonds.
- **Customizable Design:** Styled with Tailwind CSS for a responsive and modern interface.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Vite:** A fast build tool and development server.
- **Tailwind CSS:** A utility-first CSS framework for custom designs.
- **React Flow:** A library for building interactive flow-based applications.

## Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 14 or higher) installed on your machine.

### Clone the Repository

First, clone the repository to your local machine:

```bash
https://github.com/SanjishMaharjan/FlowCoder.git
cd flowcode
```

### Install Dependencies

Once you have cloned the repository, you need to install the project's dependencies. This can be done using either npm or Yarn.

If you are using npm, run:

```bash
npm install
```

If you prefer Yarn, run:

```bash
yarn install
```

Start the Development Server
With dependencies installed, you can start the development server. This will launch Vite, which serves your application and provides hot-reloading capabilities.

To start the server using npm, run:

```bash
npm run dev
```

For Yarn, use:

```bash
yarn dev
```

This command will open the application in your default browser at http://localhost:3000. If it does not open automatically, you can manually navigate to this URL.

### Using React Flow

FlowCode integrates React Flow, a powerful library for building node-based applications. React Flow enables the creation of interactive flowcharts with drag-and-drop functionality.

### Key Concepts

- **Nodes:** Represent different elements in your flowchart. You can customize node types to fit your application's needs.
- **Edges:** Define the connections between nodes, showing the flow from one element to another.
- **Handles:** Used for connecting nodes, allowing users to create and manage connections.

FlowCode supports various custom node types:

- **CircleNode:** Typically used for start or end points in the flowchart.
- **ParallelogramNode:** Ideal for variable declarations or input/output operations.
- **RectangleNode:** Represents a function or method.
- **DiamondNode:** Used for conditional logic with true/false branches.

Refer to the React Flow documentation for more information on how to create and manage nodes and edges.

### Usage

#### Create Flowcharts:

- Use the sidebar menu to add nodes to the canvas. Drag and drop nodes to position them as needed.
  Connect Nodes:

- Drag connections between nodes using handles. This will define the flow of your application.

#### Generate Code:

- Click the "Generate Code" button to convert the flowchart into code.
- The generated code will be displayed in a popup window.

#### Copy Code:

- Use the "Copy Code" button to copy the generated code to your clipboard for use in your project.

### Components

- **CircleNode:** Represents start/end points.
- **ParallelogramNode:** For variable declarations or I/O operations.
- **RectangleNode:** Represents functions or methods.
- **DiamondNode:** For conditional logic with true/false branches.

### License

This project is licensed under the MIT License. For more details, refer to the LICENSE file.

### Acknowledgments

- **React:** For providing a powerful and flexible library for building user interfaces.
- **Vite:** For its fast build times and development environment.
- **Tailwind CSS:** For its utility-first approach to styling.
- **React Flow:** For enabling the creation of interactive flow-based diagrams.
