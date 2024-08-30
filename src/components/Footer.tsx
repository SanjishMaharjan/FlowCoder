const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">
          FlowCode: A Flowchart to Code Converter using React Flow
        </h1>
        <p className="text-sm">
          © {new Date().getFullYear()} FlowCode. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
