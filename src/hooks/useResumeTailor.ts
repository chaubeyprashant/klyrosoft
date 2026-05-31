import { useState, useEffect } from 'react';

export const useResumeTailor = () => {
  const [latexCode, setLatexCode] = useState<string>('');
  const [jobDescription, setJobDescription] = useState<string>('');
  const [optimizedLatex, setOptimizedLatex] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Load saved LaTeX on mount
  useEffect(() => {
    const saved = localStorage.getItem('klyrosoft_resume_latex');
    if (saved) setLatexCode(saved);
  }, []);

  const handleLatexChange = (code: string) => {
    setLatexCode(code);
    localStorage.setItem('klyrosoft_resume_latex', code);
  };

  const optimizeResume = async () => {
    if (!latexCode.trim()) {
       setError("Please enter your LaTeX resume code.");
       return;
    }
    if (!jobDescription.trim()) {
       setError("Please enter a job description.");
       return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // TODO: Connect to actual AI Provider
      // Placeholder for AI processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult = `% AI Optimized version for: ${jobDescription.substring(0, 50)}...\n${latexCode}`;
      setOptimizedLatex(mockResult);

    } catch (err: any) {
      setError(err?.message || "An error occurred during optimization.");
    } finally {
      setIsProcessing(false);
    }
  };

  const clearData = () => {
      setLatexCode('');
      setJobDescription('');
      setOptimizedLatex('');
      localStorage.removeItem('klyrosoft_resume_latex');
  }

  const replaceOriginal = () => {
     if(optimizedLatex) {
         handleLatexChange(optimizedLatex);
         setOptimizedLatex('');
     }
  }

  return {
    latexCode,
    setLatexCode: handleLatexChange,
    jobDescription,
    setJobDescription,
    optimizedLatex,
    isProcessing,
    error,
    optimizeResume,
    clearData,
    replaceOriginal
  };
};
