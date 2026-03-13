# SOP: Application Lifecycle Management

## Goal
Manage the Vite-based React application using deterministic scripts via the Orchestrator.

## Commands

### 1. Install Dependencies
**Description**: Cleans and installs project dependencies.
**Orchestration**:
- Run `python execution/app_manager.py install`.
- Verify no errors in output.

### 2. Development Mode
**Description**: Starts the Vite development server.
**Orchestration**:
- Run `python execution/app_manager.py dev`.
- Provide the URL (standard: `http://localhost:5173`) to the user.

### 3. Production Build
**Description**: Creates a production-ready bundle.
**Orchestration**:
- Run `python execution/app_manager.py build`.
- Verify the `app/dist/` directory exists after completion.

## Failure Handling
- If `npm` is not found, check system PATH.
- If `node_modules` installation fails, check `.tmp/app_logs.txt` for details.
