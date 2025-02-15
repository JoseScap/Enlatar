import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/config/supabaseClient';
import { LoginFormData } from '@/types';

interface UseLoginReturn {
  formData: LoginFormData;
  error: string | null;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const INITIAL_FORM_DATA: LoginFormData = {
  email: null,
  password: null
}

export const useLogin = (): UseLoginReturn => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>(INITIAL_FORM_DATA);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.length > 0 ? e.target.value : null
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError('Todos los campos son requeridos');
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      if (data) {
        navigate('/dashboard');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit
  };
}; 