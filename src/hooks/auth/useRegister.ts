import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/config/supabaseClient';
import { RegisterFormData } from '@/types';

interface UseRegisterReturn {
  formData: RegisterFormData;
  error: string | null;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const INITIAL_FORM_DATA: RegisterFormData = {
  email: null,
  password: null,
  confirmPassword: null
}

export const useRegister = (): UseRegisterReturn => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>(INITIAL_FORM_DATA);
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

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos los campos son requeridos');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError('La contraseña debe tener al menos 10 caracteres y contener letras y números');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      if (data) {
        navigate('/login');
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