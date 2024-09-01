import { FlowchartElement } from '../types/flowChartElementTypes'

// Function to generate code from flowchart elements
export function generateCodeTest(elements: FlowchartElement[]): string {
  let code = ''

  elements.forEach((element) => {
    switch (element.type) {
      case 'circle':
        // code += `// Start or End\n`
        code += `\/* Your Program ${element.content} here*/\n\n`
        break

        case 'parallelogram':
            // Check if the content specifies 'const' or 'let'; otherwise, use 'let'
            const trimmedContent = element.content.trim();
            const isConst = trimmedContent.startsWith('const');
            const isLet = trimmedContent.startsWith('let');
    
            // Determine the appropriate declaration keyword
            const declaration = isConst ? 'const' : (isLet ? 'let' : 'let');
    
            // Remove 'const' or 'let' if they are present in the content
            const contentWithoutKeyword = isConst || isLet
              ? trimmedContent.split(' ').slice(1).join(' ')
              : trimmedContent;
    
            // Append the code line
            code += `${declaration} ${contentWithoutKeyword};\n\n`;
            break;

      case 'rectangle':
        code += `function Method () {\n return(${element.content}) \n } \n\n`
        break

      case 'diamond':
        code += `if (${element.content}) {\n  // condition is true\n} else {\n  // condition is false\n}\n\n`
        break

      default:
        code += `// Unknown element\n`
        break
    }
  })

  return code
}


// Function to generate code from flowchart elements
export function generateCode(nodes: any[], edges: any[]): string {
  let code = '';

  // Generate code for nodes
  nodes.forEach((node: any) => {
    const { type, data } = node;
    
    switch (type) {
      case 'circle':
        // code += `// Start or End\n`;
        code += `/* Your Application ${data.label} here */\n\n`;
        break;

      case 'parallelogram':
        const trimmedContent = data.label.trim();
        const isConst = trimmedContent.startsWith('const');
        const isLet = trimmedContent.startsWith('let');
        const declaration = isConst ? 'const' : (isLet ? 'let' : 'let');
        const contentWithoutKeyword = isConst || isLet
          ? trimmedContent.split(' ').slice(1).join(' ')
          : trimmedContent;
        code += `${declaration} ${contentWithoutKeyword};\n\n`;
        break;

      case 'rectangle':
        code += `function Method() {\n  return(${data.label});\n}\n\n`;
        break;

      case 'diamond':
        code += `if (${data.label}) {\n`;
        if (data.trueComponent) {
          code += `  // True condition\n`;
          code += `  // ${data.rightType} component: ${data.trueComponent}\n`;
          switch (data.rightType) {
            case 'circle':
              code += `  /* Your Application ${data.trueComponent} here */\n`;
              break;
            case 'parallelogram':
              code += `  let ${data.trueComponent};\n`;
              break;
            case 'rectangle':
              code += `  function ${data.trueComponent}() {\n    // Add your code here\n  }\n`;
              break;
          }
        } else {
          code += `  // True condition\n  // Add your code here\n`;
        }
        code += `} else {\n`;
        if (data.falseComponent) {
          code += `  // False condition\n`;
          code += `  // ${data.leftType} component: ${data.falseComponent}\n`;
          switch (data.leftType) {
            case 'circle':
              code += `  /* Your Application ${data.falseComponent} here */\n`;
              break;
            case 'parallelogram':
              code += `  let ${data.falseComponent};\n`;
              break;
            case 'rectangle':
              code += `  function ${data.falseComponent}() {\n    // Add your code here\n  }\n`;
              break;
          }
        } else {
          code += `  // False condition\n  // Add your code here\n`;
        }
        code += `}\n\n`;
        break;

      default:
        code += `// Unknown element\n`;
        break;
    }
  });

  // Generate code for edges (if needed)
  edges.forEach((edge: any) => {
    const { source, target } = edge;
    code += `// Edge from ${source} to ${target}\n`;
  });

  return code;
}

