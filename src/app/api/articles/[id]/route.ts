import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Chemin vers le fichier Markdown
    const filePath = path.join(process.cwd(), 'src', 'content', `article-${id}.md`);
    
    // Vérifier si le fichier existe
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    // Lire le contenu du fichier
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    return NextResponse.json({
      success: true,
      content: fileContent
    });
    
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}