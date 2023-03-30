import { Rule, Tree, SchematicContext, SchematicsException } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { applyToUpdateRecorder } from '@schematics/angular/utility/change';
import { addImportToModule,  } from '@schematics/angular/utility/ast-utils';
import * as ts from 'typescript';
import { createSourceFile } from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript'

export function ngAdd(): Rule {
    return (tree: Tree, context: SchematicContext) => {

        context.logger.info('Adding library Module to the app...');
        const modulePath = './src/app/app.module.ts';
    
        if(!tree.exists(modulePath)) {
            throw new SchematicsException('The file ' + modulePath + 'doesnt exists...');
        }
    
        const recorder = tree.beginUpdate(modulePath);
    
        const text = tree.read(modulePath);
        if (text === null) {
            throw new SchematicsException('The file ' + modulePath + 'doesnt exists...');
        }
    
        const source = createSourceFile(modulePath, text.toString(), ts.ScriptTarget.Latest, true);
    
        applyToUpdateRecorder(recorder, addImportToModule(source, modulePath, 'CoreModule', 'core'));
    
        tree.commitUpdate(recorder);

        context.logger.info('Installing dependencies...');
        context.addTask(new NodePackageInstallTask({
        }))
        return tree;
    }
}